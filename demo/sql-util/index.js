var STORAGE_PREFIX = 'sql-util-xxxxxx_'
new Vue({
  el: '#app',
  watch: {
    form: {
      deep: true,
      handler (val) {
        this.setStorage('form', JSON.stringify(val))
      }
    }
  },
  computed: {
    sql () {
      var form = this.form;
      var sql = `--${form.remark}
SELECT
count(1) pv,
count(DISTINCT umid) uv,
stat_date,
event_name${form.groupList.length >0 ? ',' : ''}
${form.groupList.map(item => `misc_map['${item}'] AS ${item}`).join(',\n')}
FROM uxip.vw_dwd_app_action_detail_ebook
WHERE
event_name IN (${form.eventNameList.map(item => "'zx_" + item + "'").join(', ')})
AND event_page = '${form.pageName}'
AND stat_date BETWEEN ${form.range[0]} AND ${form.range[1]}
GROUP BY
stat_date,
event_name${form.groupList.length >0 ? ',' : ''}
${form.groupList.map(item => `misc_map['${item}']`).join(',\n')}
ORDER BY
stat_date,
event_name,
pv
DESC`
return sql
}
  },
  methods: {
    setStorage (key, str) {
      var mykey = STORAGE_PREFIX + key
      localStorage.setItem(mykey, str)
    },
    getStorage (key) {
      var mykey = STORAGE_PREFIX + key
      return localStorage.getItem(mykey)
    },
    handleAdd () {
      this.form.eventNameList.push('')
    },
    handleDelete (index) {
      this.form.eventNameList.splice(index, 1)
    },
    handleAddGroup () {
      this.form.groupList.push('')
    },
    handleDeleteGroup (index) {
      this.form.groupList.splice(index, 1)
    },
    formatTime (date, fmt) {
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    }
  },
  data: function() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    var opt = {
      form: {
        remark: 'remarkxxx',
        pageName: 'pagexxx',
        groupList: ['groupxxx'],
        eventNameList: ['eventxxx'],
        range: [this.formatTime(start, 'yyyyMMdd'), this.formatTime(end, 'yyyyMMdd')]
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
    var form = this.getStorage('form')
    form && (opt.form = JSON.parse(form))
    return opt;
  }
})
