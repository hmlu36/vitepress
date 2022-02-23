# SQL Server分頁技巧(Pagination)

###### tags: `工作`

參考連結：https://ithelp.ithome.com.tw/articles/10190424

**使用語法**
```sql=
SELECT *
FROM XXXTable
--如果要使用分頁語法，一定要加上排序，不然會出錯。
ORDER BY ID 
--這一行語法是指「略過」前n行，列出從第k行開始的8筆資料。
OFFSET n ROWS　
FETCH NEXT k ROWS ONLY
```


**取得分頁數**
```sql=
select ceiling(count(1) / PageSize) TotalPages 
  from XXXTable
-- ceiling 無條件進入
```

**分頁語法**
```sql=
select * from XXXTable
order by id desc
OFFSET $offset$ ROWS FETCH NEXT $pageSize$ ROWS ONLY
```
$offset$(略過筆數) = (PageSize * (CurrentPage - 1)
$pageSize$(每頁數目)