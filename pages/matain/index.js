//index.js
//获取应用实例
import Notify from '../../miniprogram/vant/dist/notify/notify.js';
import util from '../../utils/util';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    active: 0,
    activeKey: 0,
    detail: 1,
    matainInfo: [{
        phoneType: 1,
        list: [{
            titlelist: '00章',
            title: 'ATA00',
          info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '几起电门操作位置不当导致非正常现象',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '关于梯架使用遵循安全高度的维修提示',
              id: 1,
              filePath: '',
              fileId: ''
            }],
          },
          {
            titlelist: '01章',
            title: 'ATA01',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的分公司地方噶答复闯关东成个',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '对方感受到大范甘迪地方',
              id: 1,
              filePath: '',
              fileId: ''
            }],
          },
          {
            titlelist: '02章',
            title: 'ATA02',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '广东省发的非官方的是的发生大似懂非懂送到',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '大范甘迪帝国时代帝国时代地方噶发市分公司',
              id: 1,
              filePath: '',
              fileId: ''
            }],
          },
          {
            titlelist: '03章',
            title: 'ATA00',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的非官方地方高的非官方的丰东股份大上的',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '的分公大幅吧v长长的都发给对方风格度地方司答复',
              id: 1,
              filePath: '',
              fileId: ''
            }]
          },
          {
            titlelist: '04章',
            title: 'ATA00',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的非官方德仁堂都发给对方热的方法白癜风的',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '的分公大幅度地电风扇方都发给对方吧司答复',
              id: 1,
              filePath: '',
              fileId: ''
            }]
          },
          {
            titlelist: '05章',
            title: 'ATA00',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的非官地方高大地方高大上都发给对方上地方噶方的',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '的分公大幅度是对方感受是的分公司答复到地方司答复',
              id: 1,
              filePath: '',
              fileId: ''
            }]
          },
          {
            titlelist: '06章',
            title: 'ATA00',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的非官对方感的非电饭锅电饭锅官方的公司的受到方的',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '的分公大幅度地第三大股东非广东省方感受到方司答复',
              id: 1,
              filePath: '',
              fileId: ''
            }]
          },
          {
            titlelist: '07章',
            title: 'ATA00',
            info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
            text: [{
              fileName: '的非官方尔特让他有发的感受到吧发光时代大幅度的',
              id: 1,
              filePath: '',
              fileId: ''
            }, {
              fileName: '的分公大爽肤水低功耗幅度地方发的感受到吧司答复',
              id: 1,
              filePath: '',
              fileId: ''
            }]
          }
        ]
      },
      {
        phoneType: 2,
        list: [{
          titlelist: '00章',
          title: 'ATA00',
          info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
          text: [{
            fileName: '几起电门操作位置不当多个粉丝的导致非正常现象',
            id: 1,
            filePath: '',
            fileId: ''
          }, {
            fileName: '关于梯架使用遵循安全高度的维修是对方感受到提示',
            id: 1,
            filePath: '',
            fileId: ''
          }]
        }]
      },
      {
        phoneType: 3,
        list: [{
          titlelist: '00章',
          title: 'ATA00',
          info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
          text: [{
            fileName: '几起电门操作位置不当导致非正常现象',
            id: 1,
            filePath: '',
            fileId: ''
          }, {
            fileName: '关于梯架使用遵循安全高度的维修提示',
            id: 1,
            filePath: '',
            fileId: ''
          }]
        }]
      },
      {
        phoneType: 4,
        list: [{
          titlelist: '00章',
          title: 'ATA00',
          info: '只希望对故障的处理思路和方法有所启发，目的在于交流，只作为参考，不作为故障处理的标准。',
          text: [{
            fileName: '几起电门操作位置不当导致非正常现象',
            id: 1,
            filePath: '',
            fileId: ''
          }, {
            fileName: '关于梯架使用遵循安全高度的维修提示',
            id: 1,
            filePath: '',
            fileId: ''
          }]
        }]
      }
    ]
  },
  onClick: function(event) {
    this.setData({
      detail: event.currentTarget.dataset.key + 1
    })
  },
  onChange(event) {

  },
});