sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function (Controller) {
	"use strict";

	return Controller.extend("fokind.kanban.controller.App", {
		onDrop: function(oEvent) {
			console.log(oEvent.getParameters());
			// var oDraggedContext = oEvent.getParameter("draggedControl").getBindingContext();
			// console.log(oDraggedContext);
			// console.log(oDraggedContext.getObject());
			// var oDroppedContext = oEvent.getParameter("droppedControl").getBindingContext();
			// var sDropPosition = oEvent.getParameter("dropPosition");
			
			// удалить из исходного
			// добавить в целевой
		}
	});
});