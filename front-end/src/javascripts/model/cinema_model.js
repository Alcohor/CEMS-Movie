

const list = () => {
    return $.ajax({
        url: '/api/cinema/list',
        success:(results) => {
           return results
        }
    })
}

export default {
    list
}