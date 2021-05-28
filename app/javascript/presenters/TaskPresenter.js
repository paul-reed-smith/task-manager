import PropTypes from 'prop-types';
import PropTypesPresenter from 'utils/PropTypesPresenter';

export default new PropTypesPresenter(
  {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.number,
    assignee: PropTypes.number,
    state: PropTypes.string,
  },
  {
    idName(task) {
      return `Task # ${this.id(task)} ${this.name(task)}`;
    },
  },
);
