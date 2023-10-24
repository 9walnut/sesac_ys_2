-- update 문--
update customer set custname = '강해라' where custid='bunny';

-- delete --
delete from customer where custid='wow123';

-- 오류 발생 ? 값을 참조하고 있을 경우 데이터를 삭제할 수 없음
delete from orders where custid='wow123';
select * from user;

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday DATE not null,
    age int not null default 0
);