export const openDialog = (dialogId: string) => {
  const dialog = document.getElementById(dialogId);

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
};
