module.exports = (robot) => {
  robot.hear(/ぼっとてすと/, (res) => {
    res.send("ぼっとてすとです")
  })
  robot.hear(/リプしてほしい！/, (res) => {
    res.reply("リプしました")
  })
}
