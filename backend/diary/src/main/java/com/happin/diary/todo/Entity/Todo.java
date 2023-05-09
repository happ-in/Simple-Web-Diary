package com.happin.diary.todo.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Todo {

    private LocalDateTime date;
    private long sn;
    private String todo;
}
