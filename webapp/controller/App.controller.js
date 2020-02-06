sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function (Controller) {
	"use strict";

	return Controller.extend("fokind.kanban.controller.App", {
		onDrop: function (oEvent) {
			var oModel = oEvent.getParameter("draggedControl").getBindingContext().getModel();
			var oDraggedItem = oEvent.getParameter("draggedControl").getBindingContext().getObject();

			// удалить из исходного
			var oDraggedList = oEvent.getParameter("draggedControl").getParent().getBindingContext().getProperty("tasks");
			var iDraggedIndex = oDraggedList.indexOf(oDraggedItem);
			oDraggedList.splice(iDraggedIndex, 1);

			// добавить в целевой
			var sDropPosition = oEvent.getParameter("dropPosition");

			if (sDropPosition === "On") {
				var oDroppedList = oEvent.getParameter("droppedControl").getBindingContext().getProperty("tasks");
				oDroppedList.push(oDraggedItem);
			} else {
				var oDroppedItem = oEvent.getParameter("droppedControl").getBindingContext().getObject();
				var oDroppedList = oEvent.getParameter("droppedControl").getParent().getBindingContext().getProperty("tasks");
				var iDroppedIndex = oDroppedList.indexOf(oDroppedItem) + (sDropPosition === "After" ? 1 : 0);
				oDroppedList.splice(iDroppedIndex, 0, oDraggedItem);
			}

			// обновить модель
			oModel.refresh();
		}
	});
});