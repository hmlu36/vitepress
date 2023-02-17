# [SQL Server]import large sql file 

###### tags: `工作`

在執行少量的sql寫入時，可以直接貼到Microsoft SQL Server Management Studio執行
但若是檔案太大時，可以使用sqlcmd的方式來執行  
指令如下:

```ps
sqlcmd -S 資料庫IP -U 使用者名稱 -P 使用者密碼 -d 資料庫名稱 -i .sql檔案路徑
```

執行時會跳出錯誤，需開啟QUOTED_IDENTIFIER：  
<span style="color:red">
訊息 1934, 層級 16, 狀態 1, 伺服器 User, 行 4  
INSERT 失敗，因為下列 SET 選項的設定錯誤: 'QUOTED_IDENTIFIER'。請確認與 索引檢視表及/或計算資料行上的索引及/或篩選的索引及/或查詢通知及/或 XML 資料類型方法及/或空間索引作業 一起使用的 SET 選項是否正確。
</span>

example:  
```ps
C:\>sqlcmd -I -S localhost -U test -P test123 -d dbo -i C:\sql.sql 
```

另外，若資料當中有中文，sqlcmd會直接結束
sqlcmd執行必須加入 <span style="color:red">-f 65001</span> 代表對應中文編碼
SQL當中的中文欄位前方也要加 N
```sql
INSERT INTO dbo.User(Name, ID) values N('王大明', 'Soo1');
```
  
最後sqlcmd執行的參數會變成這樣子  
若要將執行的結果匯出成txt檔，可以加上-o C:\sql.log example:  
<span style="color:red">
C:\>sqlcmd -I -S localhost -U test -P test123 -d dbo -f 65001 -i C:\sql.sql -o C:\sql.log
</span>

