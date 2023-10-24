-- 집계 함수
select * from orders;
-- orders 테이블에 존재하는 주문 개수
select count(*) as 'total_order' from orders;
-- 사람별 주문 건수 group by + 집계 함수
select custid, count(*) as'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select * from orders;
select custid, sum(amount) as 'total_amount' from orders group by custid;

select custid, sum(amount) as 'total_amount' from orders where custid!= 'bunny' group by custid having sum(amount) > 5;

select custid, sum(price*amount) as 'total_price' from orders group by custid;

-- customer, orders를 inner join >> 
select * from customer inner join orders on customer.custid = orders.custid;
-- customer, orders를 inner join >> 주문별 배송지를 정렬한 명령문
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;