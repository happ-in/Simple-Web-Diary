package com.happin.diary.todo.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    @EmbeddedId
    private TodoId todoId;

    private long priorityNum;
    private String todo;
    private char complete;
}
