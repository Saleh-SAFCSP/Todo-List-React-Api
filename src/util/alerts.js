const successAlert = async (Swal, message) => {
  await Swal.fire({
    title: message,
    icon: 'success',
    showConfirmButton: false,
    timer: 1000,
    heightAuto: false,
  });
};

const errorAlert = async (Swal, message) => {
  await Swal.fire({
    title: message,
    icon: 'error',
    heightAuto: false,
  });
};

const updateAlert = async (Swal) => {
  const updatedTodo = await Swal.fire({
    title: 'Enter your updated todo',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Update',
    showLoaderOnConfirm: true,
    heightAuto: false,
  });

  return updatedTodo;
};

export { successAlert, errorAlert, updateAlert };
