import classNames from "classnames";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "components/ui/Button";
import { FlexContainer } from "components/ui/Flex";

import styles from "./EditControls.module.scss";
import { ResponseMessage } from "./ResponseMessage";

interface EditControlProps {
  isSubmitting: boolean;
  dirty: boolean;
  submitDisabled?: boolean;
  resetForm: () => void;
  successMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
  enableControls?: boolean;
  hidden?: boolean;
}

const EditControls: React.FC<EditControlProps> = ({
  isSubmitting,
  dirty,
  submitDisabled,
  resetForm,
  successMessage,
  errorMessage,
  enableControls,
  hidden,
}) => {
  const isButtonDisabled = hidden || isSubmitting || (!dirty && !enableControls);
  return (
    <FlexContainer
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
      gap="lg"
      className={classNames(styles.container, { [styles.hidden]: hidden })}
    >
      <ResponseMessage dirty={dirty} successMessage={successMessage} errorMessage={errorMessage} />
      <FlexContainer gap="md">
        <Button
          type="button"
          variant="secondary"
          disabled={isButtonDisabled}
          onClick={resetForm}
          data-testid="cancel-edit-button"
        >
          <FormattedMessage id="form.cancel" />
        </Button>
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isButtonDisabled || submitDisabled}
          data-testid="save-edit-button"
        >
          <FormattedMessage id="form.saveChanges" />
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default EditControls;
