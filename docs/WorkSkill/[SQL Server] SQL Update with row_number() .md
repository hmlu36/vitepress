# [SQL Server] SQL Update with row_number() 

###### tags: `工作`


在SQL Server裡想要更新某個欄位，根據另外一個欄位排序
可以參考以下的方法 
```sql
UPDATE UpdateTarget
    SET seq = rownum
   FROM (
        SELECT seq, row_number () OVER (ORDER BY seq) rownum
          FROM Table
         WHERE no = @no
) UpdateTarget
```