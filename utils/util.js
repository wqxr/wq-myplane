const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
let config = {
  planeType: [{
      label: '737-NG',
      value: 1
    },
    {
      label: '737MAX',
      value: 2
    },
    {
      label: 'A320',
      value: 3
    },
    {
      label: '320Neo',
      value: 4
    }
  ]
}
function getConfLabel (confName, value)  {
  const options = configs[confName];
  if (!!options) {
    for (const option of options) {
      if (option.value.toString() === value.toString()) {
        return option.label;
      }
    }
  }
  return '';
}


module.exports = {
  formatTime: formatTime,
  getConfLabel: getConfLabel
}