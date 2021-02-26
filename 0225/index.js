function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\w\.\-]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');
    if (!new_id) {
        new_id = "a";
    }
    if (new_id.length >= 16) {
        new_id = new_id
            .slice(0, 15)
            .replace(/\.$/, '');
    }
    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    }
    return new_id;
}

function solution(new_id) {
    const answer = new_id
        .toLowerCase() 
        .replace(/[^\w\-\.]/g, '') 
        .replace(/\.+/g, '.') 
        .replace(/^\.|\.$/g, '') 
        .replace(/^$/, 'a') 
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    return len > 2 ? answer : answer.padEnd(3,answer[len-1]);
}