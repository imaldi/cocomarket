// import { configure } from "vee-validate";
import { configure, defineRule } from 'vee-validate';

export function initVeeValidate() {
    // Updating default vee-validate configuration
    configure({
        validateOnBlur: true,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: true,
    });
}

defineRule('required', (value: string | any[]) => {
    if (!value || !value.length) {
        return 'Wajib diisi!';
    }
    return true;
});

defineRule('confirmed', (value: any, [target]: any) => {
    if (value === target) {
        return true;
    }
    return 'Passwords harus sesuai';
});

defineRule('email', (value: string) => {
    // Check if email
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return 'Email tidak valid';
    }
    return true;
});

defineRule('numeric', (value: string) => {
    if (!/^\d+$/.test(value)) {
        return 'Wajib diisi dengan angka';
    }
    return true;
});

defineRule('minMax', (value: any, [min, max]: any) => {
    const numericValue = Number(value);
    if (numericValue < min) {
        return `Harus lebih besar dari ${min}`;
    }
    if (numericValue > max) {
        return `Harus lebih kecil dari ${max}`;
    }
    return true;
});

defineRule('minLength', (value: string | any[], [limit]: any) => {
    if (value.length < limit) {
        return `Minimal harus ${limit} karakter`;
    }
    return true;
});

defineRule('maxLength', (value: string | any[], [limit]: any) => {
    if (value.length > limit) {
        return `Maksimal harus ${limit} karakter`;
    }
    return true;
});
