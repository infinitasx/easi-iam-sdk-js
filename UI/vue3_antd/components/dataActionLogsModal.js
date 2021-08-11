import { h, defineComponent, ref } from 'vue';
import { Button, Modal, Table, Pagination } from 'ant-design-vue';

// 传入的参数： 1、国际化文字，2、查询的回调方法，
export default function (params, getDataActionLog) {
  return defineComponent({
    name: 'easi-action-log',
    props: {
      data_id: {
        type: [Number, String],
        required: true,
      },
    },
    setup(props, { slots }) {
      const visible = ref(false);
      const loading = ref(false);
      const dataSource = ref([]);
      const pagination = ref({
        current: 1,
        total: 50,
        pageSize: 30,
      });
      // 开关对话框
      const showChange = () => {
        visible.value = !visible.value;
      };

      // 数据查询
      const queryHandler = () => {
        loading.value = true;
        getDataActionLog({
          application_id: params.application_id,
          function_type: params.function_type,
          page: pagination.value.current - 1,
          pageSize: pagination.value.pageSize,
          data_id: props.data_id,
        })
          .then(res => {
            pagination.value.total = res.total;
            dataSource.value = res.events;
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            loading.value = false;
          });
      };

      return () => [
        slots.default
          ? h(
          'div',
          {
            style: {
              display: 'inline-block',
            },
            onClick: showChange,
          },
          [h(slots.default)],
          )
          : h(
          Button,
          {
            type: 'link',
            onClick: showChange,
          },
          { default: () => '操作日志' },
          ),
        visible.value
          ? h(
          Modal,
          {
            width: '1000px',
            maskClosable: false,
            visible: visible.value,
            destroyOnClose: true,
            onCancel() {
              showChange();
            },
          },
          {
            title: () => '操作日志',
            footer: () =>
              h(
                Button,
                {
                  onClick() {
                    showChange();
                  },
                },
                { default: () => '关闭' },
              ),
            default: () => [
              // 表格数据
              h(Table, {
                loading: loading.value,
                dataSource: dataSource.value,
                columns: [
                  {
                    title: '操作内容',
                    dataIndex: 'content',
                  },
                  {
                    title: '操作时间',
                    width: '200px',
                    dataIndex: 'created_at',
                  },
                ],
              }),
              // 分页模块
              h(
                'footer',
                {
                  style: {
                    marginTop: '12px',
                    textAlign: 'right',
                  },
                },
                [
                  h(Pagination, {
                    showQuickJumper: true,
                    showSizeChanger: true,
                    total: pagination.value.total,
                    current: pagination.value.current,
                    pageSize: pagination.value.pageSize,
                    pageSizeOptions: ['20', '30', '50'],
                    onChange(page, pageSize) {
                      pagination.value.current = page;
                      pagination.value.pageSize = pageSize;
                      queryHandler();
                    },
                    onShowSizeChange(current, size) {
                      pagination.value.current = 1;
                      pagination.value.pageSize = size;
                      queryHandler();
                    },
                  }),
                ],
              ),
            ],
          },
          )
          : '',
      ];
    },
  });
}
