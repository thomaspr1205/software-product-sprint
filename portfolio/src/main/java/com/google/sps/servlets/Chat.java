package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/chat.html")
public class Chat extends HttpServlet {
    private int indexQuestions =0;
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Welcome to the chat!</h1>");
    response.getWriter().println(randomQuestion());
    indexQuestions++;    
  }

public String randomQuestion(){
    String[] questions = {
        "Are there any interesting things your name spells with the letters rearranged?",
        "If you were a potato, what way would you like to be cooked?",
        "Would you go to space if you knew that you could never come back to earth?",
        "Have you ever been mistaken for someone famous?",
        "What animal would you chose to be?",
        "What is the most embarrassing thing you’ve ever done?",
        "What is the strangest gift you have ever received?",
        "What kind of reality show would you appear in?",
        "Which of Snow White’s seven dwarfs describes you best (Bashful, Doc, Dopey, Grumpy, Happy, Sleepy or Sneezy)?",
        "What song describes your life right now?"
    };
    while(indexQuestions<questions.length){
        return questions[indexQuestions];
    }
    return "I have got no more questions. Your turn to ask!";
 }
}
