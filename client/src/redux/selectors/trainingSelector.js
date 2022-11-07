const trainingBooksList = state => state.training.books;
const getStartDate = state => state.training.start;
const getEndDate = state => state.training.end;
const getTraining = state => state.training;
const getTrainingId = state => state.training._id;
const getTotalReadPages = state => state.training.totalReadPages;
const getTotalPages = state => state.training.totalPages;

const trainingSelector = {
    trainingBooksList,
    getStartDate,
    getEndDate,
    getTraining,
    getTotalReadPages,
    getTrainingId,
    getTotalPages,
};

export default trainingSelector;
