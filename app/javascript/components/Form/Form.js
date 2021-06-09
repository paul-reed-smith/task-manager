import React from 'react';
import PropTypes from 'prop-types';
import { has } from 'ramda';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const Form = ({ errors, onChange, task }) => {
  const handleChangeTextField = ({ target: { name, value } }) => onChange({ ...task, [name]: value });

  const styles = useStyles();

  return (
    <form className={styles.root}>
      <TextField
        error={has('name', errors)}
        helperText={errors.name}
        onChange={handleChangeTextField}
        name="name"
        value={task.name}
        label="Name"
        required
        margin="dense"
      />
      <TextField
        error={has('description', errors)}
        helperText={errors.description}
        onChange={handleChangeTextField}
        name="description"
        value={task.description}
        label="Description"
        required
        margin="dense"
      />
    </form>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  task: PropTypes.shape().isRequired,
  errors: PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.arrayOf(PropTypes.string),
    assignee: PropTypes.arrayOf(PropTypes.string),
  }),
};

Form.defaultProps = {
  errors: {},
};

export default Form;
