import { ValidatorFn } from '@angular/forms';

export const fileValidator: ValidatorFn = (
  control: any
): { [message: string]: boolean } | null => {
  const file = control.value?.name;
  const allowedExtensions = ['png', 'jpeg', 'jpg', 'gif', 'svg'];
  if (file) {
    const fileExt = file.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
      return { invalidFileType: true };
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return { sizeExceeded: true };
    }
  }
  return null;
};
