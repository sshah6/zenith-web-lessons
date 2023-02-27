package fileIOLecture;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import static java.nio.file.Files.exists;

public class fileIO {
    public static void main(String[] args) {

        //Creating a path to desired directory
        Path  path = Paths.get("JAVA-LECTURES/src");
        System.out.println(path);

        //finding the desored path
        Path pathToThisFile = Paths.get("JAVA-LECTURES/src/fileIOLecture", "fileIO.java");
        System.out.println(pathToThisFile);

        //Creating a directory in the at the end of the path
        Path dataDir = Paths.get("JAVA-LECTURES/src/data");
        try{
            if(Files.notExists(dataDir)){
                Files.createDirectories(dataDir);
            }else{
                System.out.println("This directory already exists");
            }
        }catch(IOException iox){
            iox.printStackTrace();
        }

        //Navigating through to creat the file
        Path myList = Paths.get("JAVA-LECTURES/src/data/list.txt");
//        try{
//            if(Files.notExists(myList)){
//                Files.createFile(myList);
//            }else{
//                System.out.println("This file already exists.");
//            }
//        }catch(IOException iox){
//            System.out.println("Could not creat file" + iox);
//        }

        //creates an array and put strings in the created file
        List<String> names = Arrays.asList("Alex", "Oh", "Chu", "Alexis");
        try{
//            System.out.println(names);
            Files.write(myList, names);
        }catch(IOException iox){
            iox.printStackTrace();
        }

        System.out.println("=================");
        //going through the file and read every lines
        List<String> currentList = new ArrayList<>();
        try{
            currentList = Files.readAllLines(myList);

        }catch(IOException iox){
            iox.printStackTrace();
        }

        for(String name: currentList) {
            System.out.println(name);
        }


        System.out.println("=================");
        //The below code is adding a name to the document
        try{
            Files.write(myList, "The last\n".getBytes());
        }catch(IOException iox){
            iox.printStackTrace();
        }


        System.out.println("=================");
        //It prints the list file again to check if the string is added
        try{
            currentList = Files.readAllLines(myList);

        }catch(IOException iox){
            iox.printStackTrace();
        }

        for(String name: currentList) {
            System.out.println(name);
        }

        //Removing an item from the file
        Iterator<String> listIterator = currentList.iterator();
        while(listIterator.hasNext()){
            String item = listIterator.next();
            if(item.equals("Alex")){
                listIterator.remove();
            }
        }


        System.out.println("=================");
        //It prints the list file again to check if the string is added
        try{
            currentList = Files.readAllLines(myList);

        }catch(IOException iox){
            iox.printStackTrace();
        }

        for(String name: currentList) {
            System.out.println(name);
        }
    }
}
