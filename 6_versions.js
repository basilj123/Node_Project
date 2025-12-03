//Versions 
//^5.1.0
//0 - Patch Version (small fixes)
//1 - Minor Version (Recommended Bug fix)
//5 - Major Version (Breaking Update) - Its affect our code

//Symbols 
//1.Caret(^) [^5.1.0] - patch or minor versions update Automatically - [5.1.0 ---------------  > 6.0.0]
//             No Major Version Update

//2.Tilde(~) [~5.1.0] - only patch versions update automatically - [5.1.0 ---------------- > 5.2.0] 
//             No Major or minor Version Update

//3.No Symbol(exact Version) [5.1.0] - Use only 5.1.0,no updates allowed

//4.Greater than(>) [>5.1.0] -  Use any version newer than 5.1.0 [5.1.0 -------------- 6.x.x,7.x.x,-----]

//5.Greter than or equal(>=) [>=5.1.0] - Use 5.1.0 or newer [5.1.0 ------- 6.x.x,7.x.x,--------]

//6.Less than(<) [<5.1.0] - Use any version older than 5.1.0 [1.x.x --------------------- < 5.1.0]

//7.wildcard(*) [*] - Use any version [1.x.x ---------------------- 5.x.x,6.x.x,---------10.x.x,-------]

//8.Range [>=5.0.0 <6.0.0] - Use any version between 5.0.0 and 6.0.0 [5.0.0 ---------------- < 6.0.0]

//9.Latest [latest] - Use latest version