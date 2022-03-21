var turn = false;
var player1 = [];
var player2 = [];
var rule = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function win(prop, gracz)
{
	rule.forEach(winBase => {
		let count = 0;
		prop.forEach(point => {
			winBase.forEach(element => {
				if(point == element) count++;
			})
		if(count == 3) {
			alert('Wygrał '+gracz+'!');
			window.location.reload();
		}
		
		})	
	})
	return false
}
function lose(){
	if(player1.length >= 5 || player2.length >= 5){
		alert('Spróbujcie jeszcze raz!')
		window.location.reload()
	}
}
function check(param)
{
	//player1.forEach()
	var field = document.getElementById(param);
	let pass = true;
	player1.forEach(obj => {if(obj === param) pass = false})
	player2.forEach(obj => {if(obj === param) pass = false})
	if(!pass) return; 
		if(turn)
		{
			field.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/14/19/33/ankreuzen-1740989_960_720.png)";
			player1.push(param);
			win(player1,'gracz1')
		}
		else 
		{
			field.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/05/30/17/26/hook-1425312_960_720.png)";
			player2.push(param);
			win(player2,'gracz2')
		}
	console.log(lose());
	turn = !turn;
}
