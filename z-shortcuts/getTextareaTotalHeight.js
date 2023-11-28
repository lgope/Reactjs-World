	const getTextareaTotalHeight = (el) => {
		let text = el.value;
		let lines = text.split(/\r|\r\n|\n/);
		let count = lines.length;
		el.setAttribute('rows', count);
	};

	const onChange = (event) => {
			getTextareaTotalHeight(anchorEl.current);
	};

	return (
		<div className={elementClass}>
			<textarea
				onChange={onChange}
				value={value}
				id={`${classPrefix}-textarea${instanceId}`}
				onKeyDown={handleOnKeyDown}
				placeholder={placeholder}
				ref={anchorEl}
			/>
		</div>
	);
  
