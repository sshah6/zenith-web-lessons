import java.util.Date;

//OOP (Object Oriented Programming)

public class Post{
    

// ================================= OOP PRE-LECTURE RESEARCH QUESTIONS
// What is the difference between static and instance methods/variables?
//A. Scope of access. static belong to a class and intance belongs to instance of a class.

// What is an instance and what is instantiation?
// instance when a class is created in memory at run time, the otherone is when you make a class by the (new) word
// What is an object in Java?
// A set of keys with values.
// What is a class in Java?
//A. 
// What is the difference between a class and an object?
// What is a constructor?
// What are some uses of the ‘final’ keyword?
// What are some uses of the ‘this’ keyword?
// What are visibility modifiers?
// Why use private visibility?


// ================================= OOP INTRO

// -- UP TO NOW --

//  - using functions/methods to group together steps for a program to work


// -- DEFINITION --

//   OOP - Object-oriented programming

//   - A programming paradigm where state (data/properties) and behavior (functionality/methods)
//     are grouped together (often into objects)
//   - Objects in Java are created from classes (a blueprint for an object/instance)


// -- ADVANTAGES OF OOP --

//   Programming in an Object-oriented way can be used to develop code with a clearer and more modular organization in the following ways:

//   - implementation details can be abstracted away making code more readable (Abstraction) ====> (Mafhoom ya bardasht)
//   - restriction of access to various levels of abstraction preventing data inconsistencies (Encapsulation)
//   - duplication is minimized through inheritance hierarchies (Inheritance)
//   - flexible code where multiple implementations may be swapped out behind a common interface (Polymorphism) ====> (chand rekhti)


// -- THE FOUR PILLARS OF OOP --

//   1. Abstraction - keep it clean
//   2. Encapsulation - keep it contained
//   3. Inheritance - keep it DRY
//   4. Polymorphism - keep it versatile

//   https://medium.com/@hamzzza.ahmed95/four-pillars-of-object-oriented-programming-oop-e8d7822aa219

//   Today we will focus on Abstraction and Encapsulation.


// -- CONCEPTS COVERED --

//   - how to create custom classes and objects from these classes
//   - defining and using instance and static fields
//   - how to control class constructors
//   - using the "this" keyword
//   - controlling encapsulation with visibility modifiers

//Examples of blog post (implemented by a class)

    // static variables
    public static String nameOfBlog = "Justin's Blog";
    public static Date whenBlogWentLive = new Date();
    public static int maxPostContentLength = 2000;


    // instance variables
    public String title;
    public String content;
    public int numberOfPostViews;
    public String genre;
    public Date createdAt;
    public Date updatedAt;
    public String author;
//    public Comment[] comments;

    // instance methods
    public String returnViewsMessage() {
        return String.format("%s has %d views.", title, numberOfPostViews);
    }

    public void clearOutContent() {
        content = "This user no longer has an active account.";
    }

    public String returnAuthorDateMessage() {
        return String.format("This post was created by %s on %s", author, createdAt);
    }


    // static methods
    public static String getLongerBlogTitle(Post p1, Post p2) {
        if (p1.title.length() >= p2.title.length()) {
            return p1.title;
        } else {
            return p2.title;
        }
    }

    //#### This is how an empty constructor is being made
        // public Post(){

        // }

    

//    public static Post[] getPostsByGenre(Posts[] allPosts, String genre) {
        // filter out posts that don't match the genre
        // return posts in genre
//    }

    public static void main(String[] args) {

//        Math

        // create post 1
        Post p1 = new Post();
        p1.title = "A Day in the Life";
        p1.content = "Hello asd asdf asdf asdaf asdf.";
        p1.numberOfPostViews = 25;
        p1.clearOutContent();



        // create post 2
        Post p2 = new Post();
        p2.title = "My Dog, Snickers";
        p2.content = "Good doggy asfd asf asdf asdf asd fas asdf";
        p2.numberOfPostViews = 10;
        

        // using static method
        System.out.println(Post.getLongerBlogTitle(p1, p2));
//
        // accessing static property
        System.out.println(Post.nameOfBlog);
    }

}
    

