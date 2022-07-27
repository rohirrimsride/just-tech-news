const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-07-27 15:41:25');

    expect(format_date(date)).toBe('7/27/2022');
});

test('format_plural() returns "items" when passing "item", 2', () => {
    const firstWord = format_plural("tiger", 1);
    const secondWord = format_plural('lion', 2);

    expect(firstWord).toBe("tiger");
    expect(secondWord).toBe('lions');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});