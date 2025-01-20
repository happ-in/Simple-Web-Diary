package com.happin.diary.todo.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class TodoId implements Serializable {

    @Column(name = "stdr_dt")
    private LocalDateTime stdrDt;

    @Column(name = "sn")
    private int sn;

    @Column(name = "kakao_id")
    private String kakaoId;
}
