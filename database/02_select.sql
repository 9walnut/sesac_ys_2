desc customer;
select * from customer;
select * from customer where custid='bunny';
select addr from customer where custid='bunny';

-- 아래 두 문장은 동일함
select * from customer where custid!='bunny';
select * from customer where not custid='bunny';

select * from customer where birth >= '2000-01-01';

select * from customer where  birth between '2000-01-01' and '2005-03-07';

select * from customer where addr in ('대한민국 서울','일본 삿포로');

-- %%을 포함한 회원 조회
select * from customer where addr like '%대한민국%';
-- __을 포함한 회원 조회 _ 의 객수, 위치에 따라 조회 조건이 다르다
select * from customer where custname like '__수';
select * from customer where custname like '%수';
select * from customer where custname like '_해_';
select * from customer where custname like '%해_';

select * from customer where custname is null;
select * from customer where not custname is null;

-- and, or, not -- 
select * from customer where addr like '%대한민국%' and birth <= '2001-05-05';
select * from customer where addr like '%대한민국%' or birth <= '2001-05-05';

-- order by --
select * from customer order by custname ASC;
select * from customer order by custname DESC;

-- addr에 대한민국 포함하고 있는 회원 조회
select * from customer 
where addr like '%대한민국%'
order by custname desc;

select * from customer 
where addr like '%대한민국%'
order by custname desc
limit 3;