class Post{
    constructor(title){
        this.title = title;
        this.date = date;
    };

    toString()
    {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        });
    };
};