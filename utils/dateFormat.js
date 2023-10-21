const dateFormatter = (date) => {
    // Ensure 'date' is a valid Date object
    if (!(date instanceof Date)) {
      throw new Error("Invalid date object");
    }
  
    // Options for formatting the date
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'short',
    };
  
    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  };
  
  module.exports = dateFormatter;  