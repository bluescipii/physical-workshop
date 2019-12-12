import React, { Component, useState } from 'react';
import Baffle from "baffle-react";
import {useSpring, animated} from 'react-spring';



const $ = window.$;



class dictionaryclass{
  constructor(name, sign, keyword, desc) {
    this.name = name;
    this.desc = desc;
    this.sign = sign;
    this.keyword = keyword;
  }

  
  changeDesc = () => {
    $("#dicdesc").html(this.desc);
  }

}




var equals = new dictionaryclass("equals", "=", "Assign", "The meaning of ‘=‘  in programming languages is completely different from the meaning we use in our daily lives. Mathematically, = means ‘the same’ and we use the sign as it is. But in programming, there is no meaning of ‘same’ at all. In programming, it is a sign that indicates naming or assign. A=B means ‘let's say B is now called A’. More specifically, it means ‘B is now in the bowl called A’. This is one of the strangest things to whom enters programming world. Then you're bound to be curious. Why can't I say B directly and put it in a bowl called A? Why should we call it A indirectly? That's because it's either too long to say B or it costs too much to say. Also, the concept of a bowl is the most important thing in the programming world.");
var equalsequals = new dictionaryclass("equalsequals", "==", "What is the same'?", "What is ‘the same’ thing? Am I the same person as I was yesterday? Are the letters on the screen the same as those in the book? Programming has to be very strict about ‘the same’.  So how do programmers define ‘the same’? They define ‘the same’ in two aspects: content and format. Is 123 a number or a letter? Well, It's a difficult question. Is it both a number and a letter? There is no such concept. 123 is recognized as a number in the programming language, and ‘123’ is recognized as a letter. If you ask, is 123==‘123’? They will return true. This is because 123 written in numbers and 123 written in letters have the same content after all.")
var equalsequalsequals = new dictionaryclass("equalsequalsequals", "===", "obviously same", "Are the number 123 and the character 123 the same? Since the format of ‘number’ is assigned, 123 acts as a number. If you subtract 1 from 123 you get 122. It can be added, subtracted, multiplied, divided. It acts numerically in all contexts. But can we subtract 1 from the character 123? No. In the character 123 you can erase 3 with an eraser to become 12.  Or you can write other letters after 123 . Like ‘123 years’.  For another example, is Helvetica written on the web the same as Helvetica printed on the book? Although the content of Helvetica is the same, the grammar of format in which it was written is different. Programmers say things that are all of the same in content and format are 'obviously same’ to each other. The answer to the question, 123==‘123’? is false.");
var slash = new dictionaryclass("slash", "/", "sub-item", "What is the meaning of the sign ‘/ ‘ in the programming language? Let's take a close look at ‘/‘ and guess. (...) Any guesses? The sign ‘/‘ is used primarily to represent a hierarchy. It is also used as a symbol for division such as a/b and ‘to close’ something, such as /div, but let’s talk about the hierarchical meaning  which is most commonly used . a/b means that b exists in sub-item a. Even if you're not interested in programming, you've probably seen ‘/ ‘ frequently used to represent a directory of files. For example, the sentence {documents/fonts/helvetica} refers to a file named hevetica in the fonts folder in the Documents folder. If you just ask a computer to find Helvetica, the computer won’t find it.");
var slashslash = new dictionaryclass("slashslash", "//", "annotation", "'//' works in a completely different sense from '/'. '//' is an annotation sign within the programming language. Programmers can not understand the code in one sight which is made of  hundreds of lines at least, to thousands of thousands of lines . So, it is necessary to have a short explanation within the code. However, if the explanation is used recklessly, the entire system can be shut down. It is because the computer also recognizes it as a code. Therefore, there was a need of a sign that says, 'Don't interpret this part' and it is '//'. For example, in the middle of the code a programmer can write  {//this part is…} and describe the code below. Why did '//' become the sign of annotation? Maybe it’s because ‘//‘ has the form of something strong, protected wall.");
var period = new dictionaryclass("period", ".", "Korea.captial=Seoul", "What does ‘.’ mean in programming language? It's a period. So is it used to finish something? In fact, '.' is used to represent the hierarchy, like '/'. If there is one difference, '/' represents the actual path and the hierarchy, however ’.’ is used to represent the abstract path. For example, {Korea/Seoul} represents actual approach to Seoul. However, {Korea.capital} represents abstract path. ',' is, as it will be described later, is mainly used to access methods and attribution of class objects. Let's find out slowly because it can be difficult.");
var periodslash = new dictionaryclass("periodslash", "./", "the where you stand", "'.' and '/' are combined. This is used to indicate the relative path of files based on the current directory. The location that this sign is used becomes the reference. For example, Let’s say there are ‘physical file’ and ‘workshop folders’ in the ‘documents file’. When you want to access the ‘workshop folder’ from ‘physical file,’ you can access it as ‘./workshop’. If there is a folder called ‘works’ in the Workshop folder, you can go inside with the command ‘,/workshop/works’ as introduced earlier.");
var ppslash = new dictionaryclass("ppslash", "../", "finding parents", "Two ‘.’ and one ‘/‘ met. This symbol has same contextual with './' and ‘/‘. If the '/' is a symbol that enters a subdirectory and './' represents the current directory, '../' indicates the parent directory. For example, consider working in the ‘Documents folder’ and want to access to the ‘reference file’ in the ‘Documents folder’, you can write it as a ‘../reference’ to reach the reference file.  '/', ', '/' and '../' are all symbols that represent a direct path.");
var biggualho = new dictionaryclass("biggualho", "[]", "storing", "Little to be used in everyday life, but various kinds of brackets are used in programming languages. They indicates an act of opening and closing, or an act of storing something. I I think it's probably the most frequently used symbol in programming. Among them, square brackets are used as a function to hold an array. Since it is an array that binds variables with similar characteristics in one place, it is neatly and tightly wrapped to avoid dropping them.");
var middlegualho = new dictionaryclass("middlegualho", "{}", "storing", "‘()’ These brackets carry almost everything . If '[]' or ‘{}’ is used in a slightly more specific location, this symbol contains everything except the two. To tie together the units to be bound in the programming language. `()’ also plays that role, as if a syllable is assembled to create multiple syllables of words. It is usually used to deliver variables.");
var sogualho = new dictionaryclass("sogualho", "{}", "storing", "If ‘()’ is specialized in capturing variables, ‘{}’ is specialized in tying code. All codes must be enclosed within ‘{}’ In many programming languages, they enclose groups of statements and create a local scope. Such languages (C, C#, C++ and many others) are therefore called curly bracket languages.");
var byte = new dictionaryclass("byte", "byte", "byte", "byte is a primitive data type similar to int, except it only takes up 8 bits of memory. Thus, why we call it a byte. Because the memory size being so small, byte can only hold the values from -128 (-27) to 127 (27 – 1).");
var short = new dictionaryclass("short", "short", "short", "If we want to save memory and byte is too small, we can use the type halfway between the two: short. At 16 bits of memory, it's half the size of int and twice the size of byte. Its range of possible values is -32,768(-215) to 32,767(215 – 1).");
var long = new dictionaryclass("long", "long", "long", "long is the big brother of int. It's stored in 64 bits of memory so it can hold a significantly larger set of possible values. The possible values of a long are between -9,223,372,036,854,775,808 (-263) to 9,223,372,036,854,775,807 (263 – 1).");
var float = new dictionaryclass("float", "float", "float", "This is a single-precision decimal number. Which means if we get past six decimal points, this number becomes less precise and more of an estimate. In most cases, we don't care about the precision loss. But, if our calculation requires absolute precision (i.e., financial operations, landing on the moon, etc.) we need to use specific types designed for this work. For more information, check out the Java class Big Decimal. This type is stored in 32 bits of memory just like int. However, because of the floating decimal point its range is much different. It can represent both positive and negative numbers. The smallest decimal is 1.40239846 x 10-45, and the largest value is 3.40282347 x 1038.");
var double = new dictionaryclass("double", "double", "double", " its name comes from the fact that it's a double-precision decimal number. It's stored in 64 bits of memory. Which means it represents a much larger range of possible numbers than float. Although, it does suffer from the same precision limitation as float does. The range is 4.9406564584124654 x 10-324 to 1.7976931348623157 x 10308. That range can also be positive or negative.");
var boolean = new dictionaryclass("boolean", "boolean", "boolean", "The simplest primitive data type is boolean. It can contain only two values: true or false. It stores its value in a single bit. However, for convenience, Java pads the value and stores it in a single byte. Declaring it without a value defaults to false. boolean is the cornerstone of controlling our programs flow. We can use boolean operators on them.");
var char = new dictionaryclass("char", "char", "char", "Also called a character, char is a 16-bit integer representing a Unicode-encoded character. Its range is from 0 to 65,535. Which in Unicode represents ‘\u0000' to ‘\uffff'. When defining our variables, we can use any character literal, and they will get automatically transformed into their Unicode encoding for us. A characters default value is ‘/u0000'.");
var inheritance = new dictionaryclass("inheritance", "inheritance", "inheritance", "Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs (Object Oriented programming system). The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add new methods and fields in your current class also.");
var object = new dictionaryclass("object", "object", "object", "An entity that has state and behavior is known as an object e.g., chair, bike, marker, pen, table, car, etc. It can be physical or logical (tangible and intangible). The example of an intangible object is the banking system. An object has three characteristics: State: represents the data (value) of an object. Behavior: represents the behavior (functionality) of an object such as deposit, withdraw, etc. Identity: An object identity is typically implemented via a unique ID. The value of the ID is not visible to the external user. However, it is used internally by the JVM to identify each object uniquely. For Example, Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior. An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class. Object Definitions: An object is a real-world entity. An object is a runtime entity. The object is an entity which has state and behavior.The object is an instance of a class.");
var classs = new dictionaryclass("classes", "classes", "classes", "A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical. A class in Java can contain: Fields, Methods, Constructors, Blocks, Nested class and interface.");
var construct = new dictionaryclass("construct", "construct", "construct", "In Java, a constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory. It is a special type of method which is used to initialize the object. Every time an object is created using the new() keyword, at least one constructor is called. It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default. There are two types of constructors in Java: no-arg constructor, and parameterized constructor.");
var abstractclass = new dictionaryclass("abstractclass", "abstractclass", "abstractclass", "A class which is declared with the abstract keyword is known as an abstract class in Java. It can have abstract and non-abstract methods (method with the body). Before learning the Java abstract class, let's understand the abstraction in Java first. Abstraction is a process of hiding the implementation details and showing only functionality to the user. Another way, it shows only essential things to the user and hides the internal details, for example, sending SMS where you type the text and send the message. You don't know the internal processing about the message delivery. Abstraction lets you focus on what the object does instead of how it does it.");
var interfaces = new dictionaryclass("interfaces", "interfaces", "interfaces", "An interface in java is a blueprint of a class. It has static constants and abstract methods. The interface in Java is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body. It is used to achieve abstraction and multiple inheritance in Java. In other words, you can say that interfaces can have abstract methods and variables. It cannot have a method body.");
var override = new dictionaryclass("override", "override", "override", "If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java. In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as method overriding.");
var nulls = new dictionaryclass("nulls", "nulls", "nulls", "");
var publics = new dictionaryclass("publics", "publics", "publics", "If a class member is “public” then it can be accessed from anywhere. The member variable or method is accessed globally. This is the simplest way to provide access to class members. However, we should take care of using this keyword with class variables otherwise anybody can change the values. Usually, class variables are kept as private and getter-setter methods are provided to work with them.");
var privates = new dictionaryclass("privates", "privates", "privates", "If a class member is “private” then it will be accessible only inside the same class. This is the most restricted access and the class member will not be visible to the outer world. Usually, we keep class variables as private and methods that are intended to be used only inside the class as private.");
var protecteds = new dictionaryclass("protecteds", "protecteds", "protecteds", "If class member is “protected” then it will be accessible only to the classes in the same package and to the subclasses. This modifier is less restricted from private but more restricted from public access. Usually, we use this keyword to make sure the class variables are accessible only to the subclasses.");
var forss = new dictionaryclass("forss", "forss", "forss", "The Java for loop is a control flow statement that iterates a part of the programs multiple times. for loop provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.");
var whiles = new dictionaryclass("whiles", "whiles", "whiles", "A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.");
var dowhiles = new dictionaryclass("dowhiles", "dowhiles", "dowhiles", "The Java do while loop is a control flow statement that executes a part of the programs at least once and the further execution depends upon the given boolean condition.  do while loop is similar to while loop with only difference that it checks for condition after executing the statements, and therefore is an example of Exit Control Loop.");
var thiss = new dictionaryclass("thiss", "thiss", "thiss", "Keyword THIS is a reference variable in Java that refers to the current object. The various usages of 'THIS' keyword in Java are as follows: It can be used to refer instance variable of current class. It can be used to invoke or initiate current class constructor. It can be passed as an argument in the method call. It can be passed as argument in the constructor call. It can be used to return the current class instance.");
var capsule = new dictionaryclass("capsule", "capsule", "capsule", "Encapsulation is one of the four fundamental OOP concepts. The other three are inheritance, polymorphism, and abstraction. Encapsulation in Java is a mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. Therefore, it is also known as data hiding.");
var trycatch = new dictionaryclass("trycatch", "trycatch", "trycatch", "‘Try’ and ‘catch’ are keywords that represent the handling of exceptions due to data or coding errors during program execution. A try block is the block of code in which exceptions occur. A catch block catches and handles try block exceptions. The try/catch statement is used in many programming languages, including C programming language (C++ and C#), Java, JavaScript and Structured Query Language (SQL).");
var ififif = new dictionaryclass("ififif", "ififif", "ififif", "In programming, it's often desirable to execute a certain section of code based upon whether the specified condition is true or false (which is known only during the run time). For such cases, control flow statements are used.");
var breaks = new dictionaryclass("breaks", "breaks", "breaks", "Suppose you are working with loops. It is sometimes desirable to skip some statements inside the loop or terminate the loop immediately without checking the test expression. In such cases, break and continue statements are used. You will learn about continue statement in the next chapter.The break statement terminates the loop immediately, and the control of the program moves to the next statement following the loop.");
var continues = new dictionaryclass("continues", "continues", "continues", "Suppose you are working with loops. It is sometimes desirable to skip some statements inside the loop or terminate the loop immediately without checking the test expression. In such cases, break and continue statements are used.  The continue statement skips the current iteration of a loop (for, while, and do...while loop). When continue statement is executed, control of the program jumps to the end of the loop. Then, the test expression that controls the loop is evaluated. In case of for loop, the update statement is executed before the test expression is evaluated.");
var arrays = new dictionaryclass("arrays", "arrays", "arrays", "An array is a container that holds data (values) of one single type. For example, you can create an array that can hold 100 values of int type. Array is a fundamental construct in Java that allows you to store and access large number of values conveniently.");
var throws = new dictionaryclass("throws", "throws", "throws", "In Java, exceptions can be categorized into two types: Unchecked Exceptions: They are not checked at compile-time but at run-time.For example: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, exceptions under Error class, etc. Checked Exceptions: They are checked at compile-time. For example, IOException, InterruptedException, etc. Refer to Java Exceptions to learn in detail about checked and unchecked exceptions. Usually, we don't need to handle unchecked exceptions. It's because unchecked exceptions occur due to programming errors. And, it is a good practice to correct them instead of handling them. This tutorial will now focus on how to handle checked exceptions using throw and throws.");


const Dictionary = ({isDictionaryOpen}) =>  {

	const [obfuscate, setobfuscate] = useState(true);

    const exampleanimation =  useSpring({
    width : isDictionaryOpen ? window.innerWidth-$("#dictionaryleft").width()*2+"px" : '0px',
    left : isDictionaryOpen ? "0px" : 0-window.innerWidth*0.3+"px",

  })



	return(	

        
    <animated.div id="dictionarymain" style={exampleanimation}>

      <animated.div id = "wordcontainer">
           <button className="words kihodesc" onClick={equals.changeDesc}>1.{'='}</button>
           <button className="words kihodesc" onClick={equalsequals.changeDesc}>2.{'=='}</button>
           <button className="words kihodesc" onClick={equalsequalsequals.changeDesc}>3.{'==='}</button>
           
           <button className="words secondrow" onClick={slash.changeDesc}>4.{'/'}</button>
           <button className="words secondrow" onClick={slashslash.changeDesc}>5.{'//'}</button>
           <button className="words secondrow" onClick={period.changeDesc}>6.{'.'}</button>
           <button className="words secondrow" onClick={periodslash.changeDesc}>7.{'./'}</button>
           <button className="words secondrow" onClick={ppslash.changeDesc}>8.{'../'}</button>

           <button className="words kihodesc" onClick={biggualho.changeDesc}>9.{'[]'}</button>
           <button className="words kihodesc" onClick={middlegualho.changeDesc}>10.{'()'}</button>
           <button className="words kihodesc" onClick={sogualho.changeDesc}>11.{'{}'}</button>

           <button className="words secondrow" onClick={byte.changeDesc}>12.{'byte'}</button>
           <button className="words secondrow" onClick={short.changeDesc}>13.{'short'}</button>
           <button className="words secondrow" onClick={long.changeDesc}>14.{'long'}</button>
           <button className="words secondrow" onClick={float.changeDesc}>15.{'float'}</button>
          <button className="words secondrow" onClick={double.changeDesc}>16.{'double'}</button>
          <button className="words secondrow" onClick={boolean.changeDesc}>17.{'boolean'}</button>
            <button className="words secondrow" onClick={char.changeDesc}>18.{'char'}</button>



          <button className="words kihodesc" onClick={nulls.changeDesc}>19.{'null'}</button>

        <button className="words secondrow" onClick={object.changeDesc}>20.{'object'}</button>
        <button className="words secondrow" onClick={classs.changeDesc}>21.{'class'}</button>
        <button className="words secondrow" onClick={abstractclass.changeDesc}>22.{'abstractclass'}</button>
        <button className="words secondrow" onClick={construct.changeDesc}>23.{'constructor'}</button>
        <button className="words secondrow" onClick={interfaces.changeDesc}>24.{'interface'}</button>
          <button className="words secondrow" onClick={capsule.changeDesc}>25.{'Encapsulation'}</button>

         <button className="words kihodesc" onClick={thiss.changeDesc}>26.{'this'}</button>


        <button className="words secondrow" onClick={inheritance.changeDesc}>27.{'inheritance'}</button>
        <button className="words secondrow" onClick={override.changeDesc}>28.{'override'}</button>

        <button className="words kihodesc" onClick={publics.changeDesc}>29.{'public'}</button>
        <button className="words kihodesc" onClick={privates.changeDesc}>30.{'private'}</button>
        <button className="words kihodesc" onClick={protecteds.changeDesc}>31.{'protected'}</button>

         <button className="words secondrow" onClick={forss.changeDesc}>32.{'for'}</button>
          <button className="words secondrow" onClick={whiles.changeDesc}>33.{'while'}</button>
           <button className="words secondrow" onClick={dowhiles.changeDesc}>34.{'do/while'}</button>

           <button className="words kihodesc" onClick={trycatch.changeDesc}>35.{'try/catch'}</button>
            <button className="words kihodesc" onClick={throws.changeDesc}>36.{'throw'}</button>
            <button className="words kihodesc" onClick={ififif.changeDesc}>37.{'if'}</button>

             <button className="words secondrow" onClick={arrays.changeDesc}>38.{'array'}</button>
             <button className="words secondrow" onClick={breaks.changeDesc}>39.{'break'}</button>
             <button className="words secondrow" onClick={continues.changeDesc}>40.{'continue'}</button>






        



      </animated.div>
          
     <div id = "dicdesc">
     
    </div>



    </animated.div>
	);
	
}



export default Dictionary;


// import React, { Component } from "react";

// export default class Demo extends Component {

//   render() {
//     const { update, obfuscate } = this.state;
 
//     return (
    
//     );
//   }
// }




// <div>
//         <button  onClick={()=> {
//           setobfuscate(!obfuscate);     
//       }}>
//           {obfuscate ? "Reveal" : "Obfuscate"}
//         </button>
//         <Baffle
//           speed={50}
//           characters="!@#$%^&*"
//           exclude={[" ", "!"]}
//           obfuscate={obfuscate}
          
//           revealDuration={1000}
//           revealDelay={0}
//         >
//           !!!foo bar baz!!!dasdadsadasdsadasdasfsdgfsad
//         </Baffle>
//       </div>