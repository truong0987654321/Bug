export const formatTime = (sentAt) => {
    const messageDate = new Date(sentAt);
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const isToday = messageDate.toDateString() === today.toDateString();
    const isWithinSevenDays = messageDate >= sevenDaysAgo;

    const options = { hour: '2-digit', minute: '2-digit' };

    if (isToday) {
        return messageDate.toLocaleTimeString([], options); // Chỉ hiển thị giờ nếu cùng ngày
    } else if (isWithinSevenDays) {
        const dayOfWeek = messageDate.toLocaleDateString('vi-VN', { weekday: 'short' });
        return `${messageDate.toLocaleTimeString([], options)} ${dayOfWeek}`; // Hiển thị giờ kèm ngày nếu trong tuần
    } else {
        return `${messageDate.toLocaleTimeString([], options)} ${messageDate.getDate()}/${messageDate.getMonth() + 1}/${messageDate.getFullYear()}`; // Hiển thị giờ kèm ngày tháng
    }
};