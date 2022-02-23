# UNIX 指令

###### tags:`工作`

**路徑指令**
|指令|說明|
|--|--|
|.|目前目錄|
|..|上層目錄|
|~|目前使用者根目錄|
|-|回到前面一個目錄|
|cd| Change Directory|
|pwd|Print Working Directory|

**檔案操作指令**
|指令|說明|
|--|--|
|mkdir|Make Directory|
|mkdir -p a/b/c |#一次創多層目錄|
|mkdir -m 711 a |#直接指派權限|
|rmdir|Remove "empty" Directory(只能砍空的)|
|rm -r abc |#1把目錄裡所有東西砍掉|
|ls|列出目錄檔案 (-a 包含隱藏檔 -l 包含屬性與權限)|
|touch|建立檔案|
|touch abc |#建立一個檔名叫abc的檔案|
|cp|copy|
|cp ~/a/ha.cpp ~/b/ha2.cpp |#a移動到b，改名叫ha2.cpp|
|cp -r ~/a|#複製a整個資料夾到目前位置，但權限有可能被改變，所以要加上-a
|cp -s ha.cpp ha2.cpp |#建立捷徑|
|rm|remove|
|-f a.cpp |#強制刪除|
|-i a.cpp |#互動詢問是否確定要刪除(預設)|
|-r |#遞迴刪除，常用在砍目錄|
|mv|move or rename|
|mv a/ a2/|#重新命名|
|mv a.cpp b.cpp a/|#將a.cpp和b.cpp移到a目錄下|
|chmod 755 a.cpp |更改檔案屬性 (rwx 421)|
|chmod 4755 a.cpp #set-uid(SUID) rws|#執行者具有x權限，且在run-time擁有own權限 <br/> #ex: /usr/bin/passwd|
|file 檔名|看檔案類型|

**搜尋**
|which sudo|搜尋指令執行檔位置|
|--|--|
|| /usr/bin/sudo|
|whereis passwd|搜尋檔案，包含執行檔、說明檔、來源檔|
|locate keyword|搜尋部分名稱，所有出現keyword都會顯示|
|find PATH -option action|特殊條件搜尋|
|find / -mtime 0|#從根目錄下，找出第0天前的24小時內有變更過的檔案，改1就是1~2天變更的檔案|
|find / -name cleint|#找出檔名為client的檔案|
|find . -name '*client*'|#從目前目錄下，找出檔名有client的檔案|
|find / -user vince |#找出屬於vince的檔案|