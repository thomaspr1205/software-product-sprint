package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/chat")
public class Chat extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        String jsonQuestions = convertToJsonUsingGson(randomQuestion());
        response.getWriter().println(jsonQuestions);
    }

    public String[] randomQuestion() {
        String[] questions = {
            "Are there any interesting things your name spells with the letters rearranged?",
            "If you were a potato, what way would you like to be cooked?",
            "Would you go to space if you knew that you could never come back to earth?",
            "Have you ever been mistaken for someone famous?",
            "What animal would you chose to be?",
            "What is the most embarrassing thing you have ever done?",
            "What is the strangest gift you have ever received?",
            "What kind of reality show would you appear in?",
            "What song describes your life right now?"
        };
        return questions;
    }
    private String convertToJsonUsingGson(String[] questions) {
        Gson gson = new Gson();
        String jsonQuestions = gson.toJson(questions);
        return jsonQuestions;
    }
}
