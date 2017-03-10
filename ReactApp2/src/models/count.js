
export default {
  namespace: 'count',
  state: {
    record : 0,
    current: 0,
  },
  reducers: {
		add(state, action) {
		  const newCurrent = state.current + 1;
			return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
			};
		},
		minus(state, action) {
			return { ...state, current: state.current - 1 };
		},
  },
  effects: {},
  subscriptions: {},
};
