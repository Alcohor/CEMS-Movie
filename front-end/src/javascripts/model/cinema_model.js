

const list = () => {
    return $.ajax({
        url: '/api/cinema/list',
        success:(results) => {
            console.log(results);
           return results
        }
    })
}

export default {
    list
}