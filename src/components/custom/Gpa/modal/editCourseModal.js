import React from "react";

const EditCourseModal = () => {
    return (
        <div
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            className="modal fade text-left"
        >
            <div
                role="document"
                className="modal-dialog modal-dialog-centered modal-lg"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 id="exampleModalLabel" className="modal-title">

                        </h4>
                        <button
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            className="close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="text-danger text-sm">
                            <small>
                                <i
                                    className="fa fa-exclamation-triangle"
                                    aria-hidden="true"
                                ></i>{" "}
                please enure to save your lesson before closing the modal
              </small>
                        </p>
                        <form encType="multipart/form-data">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="form-control-label">Select Lesson</label>
                                        <select className="form-control" name="lesson">
                                            <option>Select Lesson</option>
                                            <option value="1">Lesson 1</option>
                                            <option value="2">Lesson 2</option>
                                            <option value="3">Lesson 3</option>
                                            <option value="4">Lesson 4</option>
                                            <option value="5">Lesson 5</option>
                                            <option value="6">Lesson 6</option>
                                            <option value="7">Lesson 7</option>
                                            <option value="8">Lesson 8</option>
                                            <option value="9">Lesson 9</option>
                                            <option value="10"> Lesson 10</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Lesson Title</label>
                                        <input
                                            type="text"
                                            placeholder="Lesson Title"
                                            className="form-control"
                                            name="title"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label
                                            htmlFor="fileInput"
                                            className="col-sm-3 form-control-label"
                                        >
                                            upload video
                    </label>
                                        <div className="col-sm-9">
                                            <input
                                                id="fileInput"
                                                type="file"
                                                className="form-control-file"
                                                name="video"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Instructions</label>
                                        <textarea
                                            className="form-control"
                                            name="instruction"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className="i-checks">
                                            <input
                                                id="checkboxCustom1"
                                                type="checkbox"
                                                value=""
                                                className="checkbox-template"
                                            />
                                            <label htmlFor="checkboxCustom1">
                                                Include Assignment
                      </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="line"></div>

                                    <div className="form-group">
                                        <label>Assignment - 1</label>
                                        <textarea
                                            className="form-control"
                                            name="instruction"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Answer Option</label>
                                        <input
                                            type="text"
                                            placeholder="Option A"
                                            className="form-control"
                                            name="optiona"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Option B"
                                            className="form-control"
                                            name="optionb"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Option C"
                                            className="form-control"
                                            name="optionc"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Option D"
                                            className="form-control"
                                            name="optiond"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Correct Option</label>
                                        <select className="form-control">
                                            <option>Select Correct Answer</option>
                                            <option value="optiona">A</option>
                                            <option value="optionb">B</option>
                                            <option value="optionc">C</option>
                                            <option value="optiond">D</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            data-dismiss="modal"
                            className="btn btn-secondary"
                        >
                            Close
            </button>
                        <button type="button" className="btn btn-primary">
                            Save
            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCourseModal;
