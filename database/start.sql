show databases;
-- 데이터 베이스 생성
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택
use sesac_test;

-- 테이블 생성
CREATE TABLE user(
	id VARCHAR(10) PRIMARY KEY NOT NULL,
    password VARCHAR(20) NOT NULL,
    age INT UNSIGNED
);

show tables;
-- 테이블 속성 추가
ALTER TABLE user ADD gender ENUM("남자", "여자") NOT NULL;

SELECT * FROM USER;
--테이블 속성 삭제
ALTER TABLE user DROP COLUMN age;
--테이블 속성 수정
ALTER TABLE user MODIFY gender VARCHAR(4);

--테이블 삭제
DROP TABLE user