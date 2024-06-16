const useFormatData = (date) =>{
    const [year,month,day ] = date.split('-');
    const MonthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${MonthName[month - 1]} ${day}, ${year}`
};
export default useFormatData;