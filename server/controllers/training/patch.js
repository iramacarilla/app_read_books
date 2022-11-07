const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addRead = async (req, res, next) => {
    try {
        const user = req.user;
        let { date, pages } = req.body;

        const training = await Training.findOne({
            _id: user?.training,
        }).populate('books');

        if (!training) {
            return res.status(403).json({
                status: 'error',
                code: 403,
                message: 'no active training',
            });
        }

        let book = null;
        let totalPages = 0;

        for (let i = 0; i < training.books.length; i++) {
            const arrayBook = await Book.findOne({ _id: training.books[i] });

            if (arrayBook?.numberOfPages === arrayBook?.readPages) {
                continue;
            }

            arrayBook.readPages += pages;
            arrayBook.readPages += training.rest;
            training.totalReadPages += pages;

            training.rest = 0;

            if (arrayBook.readPages >= arrayBook.numberOfPages) {
                training.rest = arrayBook.readPages - arrayBook.numberOfPages;
                arrayBook.readPages = arrayBook.numberOfPages;
            }

            if (training.totalReadPages > training.totalPages) {
                training.totalReadPages = training.totalPages;
            }

            await training.save();

            const {
                _id,
                title,
                author,
                year,
                numberOfPages,
                readPages,
                review,
                rating,
            } = arrayBook;
            const validateBook = {
                _id,
                title,
                author,
                year,
                numberOfPages,
                readPages,
                review,
                rating,
            };

            await arrayBook.save();

            book = validateBook;
            totalPages = pages;

            break;
        }

        training.books.forEach(function (item, index) {
            if (item._id.equals(book._id)) {
                this[index] = book;
            }
        }, training.books);

        if (training.totalReadPages === training.totalPages) {
            await Training.deleteOne({ _id: user.training });

            user.training = null;

            await user.save();

            return res.status(200).json({
                status: 'success',
                code: 200,
                message: 'you have read all the books, the training is over',
                data: {
                    book,
                    training: {
                        _id: training._id,
                        start: training.start,
                        end: training.end,
                        duration: training.duration,
                        pagesReadPerDay: training.pagesReadPerDay,
                        totalPages: training.totalPages,
                        totalReadPages: training.totalReadPages,
                        books: training.books,
                        results: training.results,
                    },
                },
            });
        }

        const currentTime = date.split('-');
        const currentDate = DateTime.local(
            Number(currentTime[0]),
            Number(currentTime[1]),
            Number(currentTime[2]),
        );

        date = currentDate.toFormat('yyyy-LL-dd');
        pages = totalPages;

        training.results.push({ date, pageCount: pages });

        await training.save();

        return res.status(200).json({
            status: 'success',
            code: 200,
            data: {
                book,
                training: {
                    _id: training._id,
                    start: training.start,
                    end: training.end,
                    duration: training.duration,
                    pagesReadPerDay: training.pagesReadPerDay,
                    totalPages: training.totalPages,
                    totalReadPages: training.totalReadPages,
                    books: training.books,
                    results: training.results,
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addRead,
};
