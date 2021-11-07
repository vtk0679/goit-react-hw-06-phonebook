import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../../redux/actions";

function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="find" onChange={onChange} value={filter} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    return dispatch(actions.changeFilter(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
