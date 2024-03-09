// sweetAlertConfig.ts
import { SweetAlertOptions } from 'sweetalert2';

const sweetAlertConfig: SweetAlertOptions = {
  buttonsStyling: true,
  customClass: {
    confirmButton: 'swal-confirm-button',
    cancelButton: 'swal-cancel-button',
  },
  showCancelButton: true,
  showConfirmButton: true,
  confirmButtonColor: '#7ACDD6',
  confirmButtonText: "Yes",
  cancelButtonText: 'No',
  cancelButtonColor: 'border',
  reverseButtons: true,
  width: '500px',
  padding: '20px',
};

export default sweetAlertConfig;
