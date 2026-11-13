export const openDialog = (dialogId: string) => {
  const dialog = document.getElementById(dialogId);

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
};

export const disableDialogControls = (dialogId: string) => {
  const dialog = document.getElementById(dialogId);

  if (dialog instanceof HTMLDialogElement) {
    const controls = dialog.querySelectorAll('button, input, select, textarea, a');

    controls.forEach((control) => {
      (control as HTMLElement).setAttribute('disabled', 'true');
    });
  }
};
