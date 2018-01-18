

$.ajax({
    url: '/api/codefellows',
    method: 'GET',
    success: function(data, message) {
        console.log('response form API:',data);
        $('p').text(data.company);
    }
});

$.get('/api/codefellows/301')
    .then(data => {
        console.log('GET: /api/codefellows/301', data);
        $('.course-title').text(data.name);
        $('.students').text(data.students.join(' '));
});