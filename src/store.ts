import { writable } from 'svelte/store';

export const popupConfig = writable({
    header: "Student Data",
    error: "",
    buttonText: "OK",
    visible: false,
    backButtonDisplay: true,
    backButtonText: '',
    actionType: "",
    buttonPressed: "",
    dataToBeProcessed: {},
});
export const loading = writable(false);
export const printStore = writable({});