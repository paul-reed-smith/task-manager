import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, IconButton } from '@material-ui/core/';
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

import TaskForm from '../../forms/TaskForm';
import useStyles from './useStyles';
import Form from '../Form';

const AddPopup = ({ onClose, onCreateCard, mode }) => {
  const [task, setTask] = useState(TaskForm.defaultAttributes());
  const [isSaving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const handleCreate = () => {
    setSaving(true);

    onCreateCard(task).catch((error) => {
      setSaving(false);
      setErrors(error || {});

      if (error instanceof Error) {
        // eslint-disable-next-line no-alert
        alert(`Creation Failed! Error: ${error.message}`);
      }
    });
  };

  const styles = useStyles();

  return (
    <Modal className={styles.modal} open onClose={onClose}>
      <Card className={styles.root}>
        <CardHeader
          action={
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }
          title="Add New Task"
        />
        <CardContent>
          <div className={styles.form}>
            <Form errors={errors} onChange={setTask} task={task} mode={mode} />
          </div>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button disabled={isSaving} onClick={handleCreate} variant="contained" size="small" color="primary">
            Add
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

AddPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AddPopup;
