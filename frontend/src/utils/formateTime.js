export const formatedTime = (time) => {
    const date = new Date(time)
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

const padZero = (value) => {
    return value.toString().padStart(2, '0')
}

