
export const formatCpf = (value: string) => {

    let inputCpf = value.replace(/\D/g, '');
    inputCpf = inputCpf.slice(0, 11);

    if (inputCpf.length > 9) {
        inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } 
    else if (inputCpf.length > 6) {
        inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } 
    else if (inputCpf.length > 3) {
        inputCpf = inputCpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    return inputCpf;
  };